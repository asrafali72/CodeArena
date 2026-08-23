import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import axiosClient from '../utils/axiosClient';
import Editor from '@monaco-editor/react';

const socket = io('http://localhost:3000', { 
    withCredentials: true 
});

const BattleRoom = () => {
    const { roomId, problemId } = useParams();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    
    const [matchStatus, setMatchStatus] = useState('WAITING');
    const [statusMessage, setStatusMessage] = useState('Waiting for opponent to join...');
    const [code, setCode] = useState('// Write your solution here\n');
    const [language, setLanguage] = useState('c++');
    const [winner, setWinner] = useState(null);
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [copied, setCopied] = useState(false);
    
    const [problem, setProblem] = useState(null);
    const [loadingProblem, setLoadingProblem] = useState(true);
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        const fetchProblemDetails = async () => {
            try {
                setLoadingProblem(true);
                const { data } = await axiosClient.get(`/problem/problemById/${problemId}`);
                setProblem(data);
                
                if (data.startCode && typeof data.startCode === 'string') {
                    setCode(data.startCode);
                }
            } catch (error) {
                console.error("Error fetching problem details:", error);
            } finally {
                setLoadingProblem(false);
            }
        };

        if (problemId) {
            fetchProblemDetails();
        }
    }, [problemId]);

    // Socket.io logic
    useEffect(() => {
        if (!user) return;

        socket.emit('join-battle', { roomId, userId: user._id });

        socket.on('battle-started', () => {
            setMatchStatus('ACTIVE');
            setStatusMessage('⚔️ BATTLE ACTIVE! Write your solution.');
            setStartTime(Date.now()); 
        });

        socket.on('battle-ended', (data) => {
            setMatchStatus('FINISHED');
            if (data.winnerId === user._id) {
                setWinner(`🏆 YOU WON in ${data.timeTaken || 'fast time'}!`);
            } else {
                setWinner(`💀 BATTLE OVER! ${data.winnerName} won in ${data.timeTaken || 'fast time'}`);
            }
        });

        return () => {
            socket.off('battle-started');
            socket.off('battle-ended');
        };
    }, [roomId, user]);

    const handleCopyLink = () => {
        const inviteLink = window.location.href;
        navigator.clipboard.writeText(inviteLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleRunCode = async () => {
        setIsRunning(true);
        try {
            const { data } = await axiosClient.post(`/submission/run/${problemId}`, { 
                code, 
                language 
            });
            alert("Code run complete! Check console or UI for output.");
            console.log("Run Output:", data);
        } catch (error) {
            console.error("Run failed:", error);
            alert("Error running code.");
        } finally {
            setIsRunning(false);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const { data } = await axiosClient.post(`/submission/submit/${problemId}`, { 
                code, 
                language, 
                roomId 
            });

            console.log("BACKEND SUBMISSION RESPONSE:", data);

            // Flexible validation to catch success response from backend
            const isSuccess = data.accepted || data.success || data.status === 'Accepted' || data.message?.toLowerCase().includes('success');

            if (isSuccess) {
                const safeStartTime = startTime || Date.now(); 
                const diffInSeconds = Math.floor((Date.now() - safeStartTime) / 1000);
                const minutes = Math.floor(diffInSeconds / 60);
                const seconds = diffInSeconds % 60;
                const formattedTime = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

                socket.emit('declare-winner', { 
                    roomId, 
                    winnerId: user._id, 
                    winnerName: user.firstName || 'Opponent',
                    timeTaken: formattedTime
                });
            } else {
                alert("Test cases failed. Keep trying!");
            }
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Error submitting code.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!user) return <div className="p-10 text-white">Please log in to join battles.</div>;

    return (
        <div className="flex flex-col h-screen bg-[#09090b] text-zinc-100 p-4">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#101014] border border-white/[0.07] p-4 rounded-xl mb-4 gap-4 flex-shrink-0">
                
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold tracking-tight text-white">
                        Code<span className="text-indigo-400">Arena</span> 1v1
                    </h1>
                    <span className={`text-sm mt-1 font-medium ${matchStatus === 'ACTIVE' ? 'text-emerald-400' : 'text-orange-400'}`}>
                        {winner ? winner : statusMessage}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    {matchStatus === 'WAITING' && (
                        <button 
                            onClick={handleCopyLink}
                            className="px-4 py-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg text-sm transition-colors"
                        >
                            {copied ? '✅ Link Copied!' : '📋 Copy Invite Link'}
                        </button>
                    )}

                    <select 
                        value={language} 
                        onChange={(e) => setLanguage(e.target.value)}
                        className="h-10 rounded-lg border border-white/[0.07] bg-[#101014] px-3 text-sm text-zinc-300 outline-none focus:border-indigo-500/40"
                    >
                        <option value="c++">C++</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="javascript">JavaScript</option>
                    </select>

                    <button 
                        onClick={handleRunCode} 
                        disabled={isRunning || matchStatus !== 'ACTIVE'}
                        className="px-6 py-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-bold rounded-lg disabled:opacity-50 transition-colors"
                    >
                        {isRunning ? 'Running...' : 'Run'}
                    </button>

                    <button 
                        onClick={handleSubmit} 
                        disabled={isSubmitting || matchStatus !== 'ACTIVE'}
                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg disabled:opacity-50 transition-colors"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Code'}
                    </button>
                </div>
            </div>

            {/* Split Screen Area */}
            <div className="flex-grow flex flex-col lg:flex-row gap-4 min-h-0">
                
                {/* Left Panel: Problem Details */}
                <div className="w-full lg:w-1/2 bg-[#101014] border border-white/[0.07] rounded-xl p-6 overflow-y-auto custom-scrollbar">
                    {loadingProblem ? (
                        <div className="flex items-center justify-center h-full text-zinc-500">
                            Loading problem...
                        </div>
                    ) : problem ? (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">{problem.title}</h2>
                            
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.1] text-xs font-semibold capitalize text-zinc-400">
                                    {problem.difficulty || 'Medium'}
                                </span>
                            </div>

                            <div className="text-sm leading-relaxed text-zinc-300 whitespace-pre-wrap">
                                {problem.description}
                            </div>
                            
                            {problem.visibleTestCases && problem.visibleTestCases.length > 0 && (
                                <div className="mt-8 space-y-4">
                                    <h3 className="text-lg font-semibold text-white">Example Test Cases</h3>
                                    {problem.visibleTestCases.map((tc, idx) => (
                                        <div key={idx} className="bg-[#18181b] border border-white/[0.05] p-4 rounded-lg text-sm font-mono">
                                            <p className="mb-2">
                                                <strong className="text-zinc-500 select-none">Input: </strong> 
                                                <span className="text-zinc-300">{tc.input}</span>
                                            </p>
                                            <p>
                                                <strong className="text-zinc-500 select-none">Output: </strong> 
                                                <span className="text-zinc-300">{tc.output}</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-red-400">
                            Failed to load problem details.
                        </div>
                    )}
                </div>

                {/* Right Panel: Code Editor */}
                <div className="w-full lg:w-1/2 border border-white/[0.07] rounded-xl overflow-hidden flex flex-col">
                    <Editor
                        height="100%"
                        language={language === 'c++' ? 'cpp' : language}
                        theme="vs-dark"
                        value={code}
                        onChange={(value) => setCode(value)}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 15,
                            wordWrap: 'on',
                            padding: { top: 16 }
                        }}
                    />
                </div>

            </div>
        </div>
    );
};

export default BattleRoom;
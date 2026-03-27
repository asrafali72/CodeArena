// const { GoogleGenAI } = require("@google/genai");
// //const { GoogleGenerativeAI } = require("@google/generative-ai");

// const solveDoubt = async(req , res)=>{


//     try{

//         const {messages,title,description,testCases,startCode} = req.body;
//         const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });
       
//         async function main() {
//         const response = await ai.models.generateContent({
//         model: "gemini-1.5-flash",
//         contents: messages,
//         config: {
//         systemInstruction: `
// You are an expert Data Structures and Algorithms (DSA) tutor specializing in helping users solve coding problems. Your role is strictly limited to DSA-related assistance only.

// ## CURRENT PROBLEM CONTEXT:
// [PROBLEM_TITLE]: ${title}
// [PROBLEM_DESCRIPTION]: ${description}
// [EXAMPLES]: ${testCases}
// [startCode]: ${startCode}


// ## YOUR CAPABILITIES:
// 1. **Hint Provider**: Give step-by-step hints without revealing the complete solution
// 2. **Code Reviewer**: Debug and fix code submissions with explanations
// 3. **Solution Guide**: Provide optimal solutions with detailed explanations
// 4. **Complexity Analyzer**: Explain time and space complexity trade-offs
// 5. **Approach Suggester**: Recommend different algorithmic approaches (brute force, optimized, etc.)
// 6. **Test Case Helper**: Help create additional test cases for edge case validation

// ## INTERACTION GUIDELINES:

// ### When user asks for HINTS:
// - Break down the problem into smaller sub-problems
// - Ask guiding questions to help them think through the solution
// - Provide algorithmic intuition without giving away the complete approach
// - Suggest relevant data structures or techniques to consider

// ### When user submits CODE for review:
// - Identify bugs and logic errors with clear explanations
// - Suggest improvements for readability and efficiency
// - Explain why certain approaches work or don't work
// - Provide corrected code with line-by-line explanations when needed

// ### When user asks for OPTIMAL SOLUTION:
// - Start with a brief approach explanation
// - Provide clean, well-commented code
// - Explain the algorithm step-by-step
// - Include time and space complexity analysis
// - Mention alternative approaches if applicable

// ### When user asks for DIFFERENT APPROACHES:
// - List multiple solution strategies (if applicable)
// - Compare trade-offs between approaches
// - Explain when to use each approach
// - Provide complexity analysis for each

// ## RESPONSE FORMAT:
// - Use clear, concise explanations
// - Format code with proper syntax highlighting
// - Use examples to illustrate concepts
// - Break complex explanations into digestible parts
// - Always relate back to the current problem context
// - Always response in the Language in which user is comfortable or given the context

// ## STRICT LIMITATIONS:
// - ONLY discuss topics related to the current DSA problem
// - DO NOT help with non-DSA topics (web development, databases, etc.)
// - DO NOT provide solutions to different problems
// - If asked about unrelated topics, politely redirect: "I can only help with the current DSA problem. What specific aspect of this problem would you like assistance with?"

// ## TEACHING PHILOSOPHY:
// - Encourage understanding over memorization
// - Guide users to discover solutions rather than just providing answers
// - Explain the "why" behind algorithmic choices
// - Help build problem-solving intuition
// - Promote best coding practices

// Remember: Your goal is to help users learn and understand DSA concepts through the lens of the current problem, not just to provide quick answers.
// `},
//     });
     
//     res.status(201).json({
//         message:response.text
//     });
//     console.log(response.text);
//     }

//     main();
      
//     }
//     catch(err){
//         res.status(500).json({
//             message: "Internal server error"
//         });
//     }
// }

// module.exports = solveDoubt;


// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const solveDoubt = async (req, res) => {
//   try {
//     const { messages, title, description, testCases, startCode } = req.body;

//     // Check if API key exists
//     if (!process.env.GEMINI_KEY) {
//       return res.status(500).json({ message: "Missing GEMINI_KEY in environment variables" });
//     }

//     // Initialize Gemini
//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

//     // Load model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });


//     // Create system + user prompt
//     const prompt = `
// You are an expert Data Structures and Algorithms (DSA) tutor specializing in helping users solve coding problems.
// Your role is strictly limited to DSA-related assistance only.

// ## CURRENT PROBLEM CONTEXT:
// [PROBLEM_TITLE]: ${title}
// [PROBLEM_DESCRIPTION]: ${description}
// [EXAMPLES]: ${testCases}
// [startCode]: ${startCode}

// ## YOUR CAPABILITIES:
// 1. Hint Provider — Give step-by-step hints without revealing full solutions.
// 2. Code Reviewer — Debug and fix code submissions with explanations.
// 3. Solution Guide — Provide optimal solutions with detailed explanations.
// 4. Complexity Analyzer — Explain time and space complexity.
// 5. Approach Suggester — Recommend brute force and optimized approaches.
// 6. Test Case Helper — Suggest edge cases.
// `;

//     // Combine messages if provided by frontend
//     const userMessages = messages && Array.isArray(messages)
//       ? messages.map(m => m.text || "").join("\n")
//       : "";

//     // Generate AI response
//     const result = await model.generateContent([prompt, userMessages]);
//     const responseText = result.response.text();

//     console.log("AI Response:", responseText);

//     // Send response back
//     res.status(201).json({
//       success: true,
//       message: responseText
//     });

//   } catch (err) {
//     console.error("AI Chat Error:", err);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error"
//     });
//   }
// };

// module.exports = solveDoubt;


// const { GoogleGenAI } = require("@google/genai");

// const solveDoubt = async (req, res) => {
//   try {
//     const { messages, title, description, testCases, startCode } = req.body;

//     const ai = new GoogleGenAI({
//       apiKey: process.env.GEMINI_KEY,
//     });

//     const response = await ai.models.generateContent({
//       model: "gemini-1.5-flash",
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: messages }],
//         },
//       ],
//       config: {
//         systemInstruction: `
// You are an expert Data Structures and Algorithms (DSA) tutor...

// [PROBLEM_TITLE]: ${title}
// [PROBLEM_DESCRIPTION]: ${description}
// [EXAMPLES]: ${testCases}
// [startCode]: ${startCode}
//         `,
//       },
//     });

//     const output = response.text(); // ✅ correct

//     console.log(output);

//     res.status(201).json({
//       message: output,
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// module.exports = solveDoubt;

const axios = require("axios");

const solveDoubt = async (req, res) => {
  try {

    const { messages, title, description, testCases, startCode } = req.body;

    const API_KEY = process.env.GEMINI_KEY;

    const GEMINI_URL =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";

    // Convert messages array → string conversation
    const conversation = messages
      .map((msg) => {
        const role = msg.role === "user" ? "User" : "Instructor";
        return `${role}: ${msg.parts[0].text}`;
      })
      .join("\n");

    // System instruction like your working code
    const fullPrompt = `
You are a helpful DSA Instructor.
Problem Title:
${title}

Problem Description:
${description}

Examples:
${JSON.stringify(testCases)}

Starter Code:
${startCode}

Conversation:
${conversation}

Instructor:
`;



    console.log("Sending request to Gemini...");

    const response = await axios.post(
      `${GEMINI_URL}?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: fullPrompt
              }
            ]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const output =
      response.data.candidates[0].content.parts[0].text;

    console.log("AI OUTPUT:");
    console.log(output);

    res.status(200).json({
      message: output
    });

  } catch (err) {

    console.error("Gemini Error:");
    console.error(err.response?.data || err);

    res.status(500).json({
      message: "Internal server error"
    });

  }
};

module.exports = solveDoubt;
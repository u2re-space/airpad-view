import { n as e, r as t } from "./src-CJkOASls.js";
import { a as n, c as r, n as i, r as a, s as o, t as s, u as c } from "./UniformInterop-C0jUw_HW.js";
//#region ../../projects/subsystem/src/service/instructions/core.ts
var l = {
	SOLVE_AND_ANSWER: "\nSolve equations, answer questions, and explain mathematical or logical problems from the provided content.\n\nFor equations and math problems:\n- Show step-by-step solutions\n- Provide final answers clearly marked\n- Explain reasoning for each step\n\nFor general questions:\n- Provide accurate, well-reasoned answers\n- Include relevant context and explanations\n- If multiple interpretations possible, address them\n\nFor quizzes and tests:\n- Show the correct answer with explanation\n- Explain why other options are incorrect\n\nAlways respond in the specified language and format results clearly.\n",
	WRITE_CODE: "\nWrite clean, efficient, and well-documented code based on the provided description, requirements, or image.\n\nCode requirements:\n- Use appropriate programming language for the task\n- Follow language-specific best practices and conventions\n- Include proper error handling\n- Add meaningful comments and documentation\n- Make code readable and maintainable\n\nIf generating from an image or visual description:\n- Analyze the visual elements and requirements\n- Implement the described functionality\n- Ensure code compiles and runs correctly\n\nAlways respond in the specified language and provide complete, working code.\n",
	EXTRACT_CSS: "\nExtract and generate clean, modern CSS from the provided content, image, or description.\n\nCSS requirements:\n- Use modern CSS features and best practices\n- Generate semantic, maintainable stylesheets\n- Include responsive design considerations\n- Use appropriate selectors and specificity\n- Follow CSS naming conventions\n- Optimize for performance and maintainability\n\nIf extracting from an image:\n- Analyze the visual design and layout\n- Generate corresponding CSS rules\n- Identify colors, fonts, spacing, and layout\n- Create reusable CSS classes and components\n\nAlways respond in the specified language and provide complete, working CSS.\n",
	RECOGNIZE_CONTENT: "\nRecognize and extract information from images, documents, or other visual content.\n\nRecognition requirements:\n- Identify text content accurately\n- Extract structured information\n- Recognize tables, forms, and structured data\n- Preserve formatting where possible\n- Handle different languages and scripts\n- Provide confidence scores for extracted content\n\nFor document analysis:\n- Extract key information and metadata\n- Identify document type and structure\n- Recognize important sections and headings\n\nFor image analysis:\n- Describe visual content\n- Extract text from images (OCR)\n- Identify objects, scenes, and visual elements\n\nAlways respond in the specified language and format extracted information clearly.\n",
	CONVERT_DATA: "\nConvert data between different formats while preserving structure and meaning.\n\nConversion requirements:\n- Maintain data integrity and relationships\n- Preserve formatting and structure where possible\n- Handle different data types appropriately\n- Provide clear mapping between source and target formats\n- Validate conversion accuracy\n\nSupported conversions:\n- CSV ↔ JSON ↔ XML\n- Markdown ↔ HTML\n- Text ↔ Structured data\n- Image data ↔ Text representations\n\nEnsure accurate, lossless conversion where possible.\n",
	EXTRACT_ENTITIES: "\nExtract named entities, keywords, and structured information from content.\n\nEntity extraction requirements:\n- Identify people, organizations, locations\n- Extract dates, numbers, and measurements\n- Find keywords and important terms\n- Recognize relationships and connections\n- Provide confidence scores and context\n\nOutput structured data with:\n- Entity types and values\n- Position and context information\n- Confidence scores\n- Relationship mappings\n\nFocus on accuracy and comprehensive coverage.\n",
	TRANSLATE_TO_LANGUAGE: "\nTranslate content to the specified target language while preserving meaning, tone, and formatting.\n\nTranslation requirements:\n- Maintain original meaning and intent\n- Preserve formatting, structure, and markdown syntax\n- Adapt cultural references appropriately\n- Use natural, fluent language in the target language\n- Handle technical terms, proper names, and brand names correctly\n- Maintain appropriate formality and tone\n- Preserve code blocks, mathematical expressions, and technical content\n\nFor content already in the target language:\n- Provide natural rephrasing or improvement\n- Enhance clarity and readability\n- Maintain professional quality\n\nSupported languages:\n- English (en)\n- Russian (ru)\n- Other languages as requested\n\nEnsure high-quality, natural translations that feel native to the target language.\n",
	GENERAL_PROCESSING: "\nProcess and analyze content using appropriate AI capabilities.\n\nGeneral processing requirements:\n- Understand context and intent\n- Provide relevant analysis or transformation\n- Use appropriate tools and methods\n- Maintain content quality and accuracy\n- Adapt to different content types and requirements\n\nFocus on providing useful, accurate results that meet user needs.\n",
	CRX_SOLVE_AND_ANSWER: "\nSolve the problem or answer the question presented in the content.\n\nAuto-detect the type of content:\n- Mathematical equation/expression → Solve step-by-step\n- Quiz/test question → Provide correct answer\n- Homework problem → Solve and explain\n- General question → Answer with explanation\n\nFormat output as:\n\n**Problem/Question:**\n<recognized content - use $KaTeX$ for math>\n\n**Solution/Answer:**\n<step-by-step solution or direct answer>\n\n**Explanation:**\n<clear explanation of the reasoning>\n\n---\n\nFor MATH problems:\n- Use single $ for inline math: $x = 5$\n- Use double $$ for display equations: $$\\int_0^1 f(x) dx$$\n- Show all intermediate steps\n- Simplify the final answer\n- For systems: solve all variables\n- For inequalities: use interval notation\n\nFor MULTIPLE CHOICE:\n- Identify correct option (A, B, C, D)\n- Explain why it's correct\n- Note why others are wrong\n\nFor TRUE/FALSE:\n- State True or False clearly\n- Provide justification\n\nFor SHORT ANSWER/ESSAY:\n- Provide concise, complete answer\n- Include key facts and reasoning\n\nFor CODING problems:\n- Write the solution code\n- Explain the logic\n\nIf multiple problems/questions present, solve each separately.\nIf unsolvable or unclear, explain why.\n",
	CRX_WRITE_CODE: "\nYou are an expert software developer. Analyze the provided content and generate high-quality, working code.\n\nCode Generation Requirements:\n- Choose the best programming language for the task\n- Write clean, efficient, and well-documented code\n- Include proper error handling and input validation\n- Add meaningful comments explaining complex logic\n- Follow language-specific best practices and conventions\n- Ensure code is readable, maintainable, and follows standard patterns\n\nFor each code generation task:\n1. **Analyze Requirements**: Understand what the code needs to do\n2. **Choose Language**: Select appropriate programming language\n3. **Design Solution**: Plan the code structure and logic\n4. **Write Code**: Provide complete, working code with comments\n5. **Explain Logic**: Describe how the code works and key decisions\n\nProvide complete, runnable code that solves the described problem.\n",
	CRX_EXTRACT_CSS: "\nYou are an expert CSS developer. Analyze the provided content and extract/generate the corresponding CSS styles.\n\nCSS Extraction Requirements:\n- Analyze visual elements, layout, and design patterns\n- Generate modern, clean CSS using current standards\n- Use semantic class names and proper CSS architecture\n- Include responsive design considerations\n- Optimize for performance and maintainability\n- Follow CSS best practices and conventions\n\nFor CSS extraction:\n1. **Analyze Design**: Identify colors, typography, spacing, layout\n2. **Generate Rules**: Create appropriate CSS rules and selectors\n3. **Organize Code**: Group related styles logically\n4. **Add Comments**: Explain complex or important style decisions\n5. **Ensure Compatibility**: Use widely supported CSS properties\n\nProvide complete, well-organized CSS that recreates the described design.\n"
};
l.SOLVE_AND_ANSWER, l.WRITE_CODE, l.EXTRACT_CSS, l.RECOGNIZE_CONTENT, l.CONVERT_DATA, l.EXTRACT_ENTITIES, l.TRANSLATE_TO_LANGUAGE, l.GENERAL_PROCESSING, l.CRX_SOLVE_AND_ANSWER, l.CRX_WRITE_CODE, l.CRX_EXTRACT_CSS, Object.fromEntries(Object.entries({
	"share-target": {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: !0
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"url"
		],
		defaultOverrideFactors: []
	},
	"launch-queue": {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: !0
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: []
	},
	"crx-snip": {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: !1
		},
		supportedContentTypes: ["text", "image"],
		defaultOverrideFactors: ["force-processing"]
	},
	paste: {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: !1
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			text: ["user-action"],
			markdown: ["user-action"]
		}
	},
	drop: {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: !1
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			file: ["user-action"],
			blob: ["user-action"]
		}
	},
	"button-attach-workcenter": {
		processingUrl: "/api/processing",
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-workcenter",
			doProcess: "manually",
			openApp: !1
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"file"
		],
		defaultOverrideFactors: ["explicit-workcenter"],
		associationOverrides: {
			markdown: ["explicit-workcenter"],
			text: ["explicit-workcenter"],
			image: ["explicit-workcenter"],
			file: ["explicit-workcenter"]
		}
	}
}).map(([e, t]) => [e, {
	processingUrl: t.processingUrl,
	contentAction: t.contentAction,
	...t.supportedContentTypes && { supportedContentTypes: t.supportedContentTypes }
}]));
//#endregion
//#region ../../projects/subsystem/src/routing/channel/UnifiedMessaging.ts
var u = {
	...o(),
	[n.WORKCENTER]: a.WORK_CENTER,
	[n.CLIPBOARD]: a.CLIPBOARD
}, d = null;
function f() {
	return d ||= e({
		channelMappings: u,
		queueOptions: {
			dbName: "CrossWordMessageQueue",
			storeName: "messages",
			maxRetries: 3,
			defaultExpirationMs: 1440 * 60 * 1e3
		},
		pendingStoreOptions: {
			storageKey: "rs-unified-messaging-pending",
			maxMessages: 200,
			defaultTTLMs: 1440 * 60 * 1e3
		}
	}), d;
}
var p = f();
function m(e) {
	return p.sendMessage(i({
		...e,
		source: e.source ?? "unified-messaging"
	}));
}
function h(e) {
	let n = s({
		...e,
		source: e.source ?? "crossword-unified-messaging",
		protocol: e.protocol ?? "window",
		purpose: e.purpose ?? "mail",
		srcChannel: e.srcChannel ?? e.source ?? "crossword-unified-messaging",
		dstChannel: e.dstChannel ?? e.destination
	}), r = t({
		...n,
		source: n.source,
		destination: n.destination,
		data: n.data,
		payload: n.payload,
		metadata: n.metadata,
		protocol: n.protocol,
		purpose: n.purpose,
		srcChannel: n.srcChannel,
		dstChannel: n.dstChannel,
		redirect: n.redirect,
		flags: n.flags,
		op: n.op,
		timestamp: n.timestamp,
		result: n.result,
		error: n.error ? String(n.error) : void 0
	});
	return p.sendMessage(r);
}
function g(e, t) {
	let n = r(e), i = n.length > 0 ? n : [c(e) || e];
	for (let e of i) p.registerHandler(e, t);
}
function _(e, t) {
	let n = r(e), i = n.length > 0 ? n : [c(e) || e];
	for (let e of i) p.unregisterHandler(e, t);
}
function v(e) {
	return p.initializeComponent(e);
}
function y(e, t) {
	let n = c(e) || String(e ?? "").trim();
	!n || !t || p.enqueuePendingMessage(n, t);
}
function b(e) {
	return p.processQueuedMessages(e);
}
function x(e, t) {
	p.registerComponent(e, c(t) || t);
}
//#endregion
export { g as a, h as c, x as i, p as l, f as n, b as o, v as r, m as s, y as t, _ as u };

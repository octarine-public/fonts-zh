import { RendererSDK, tryFindFile } from "./wrapper/Imports"

function LoadFontWrapper(path: string, isFallback = false) {
	const realPath = tryFindFile(path)
	if (realPath !== undefined)
		LoadFont(realPath, isFallback)
	else
		console.error(`Failed to find font file ${path}`)
}

RendererSDK.CreateFont("Noto Sans Traditional Chinese", "fonts/NotoSansTC/NotoSansTC-Bold.otf", 700, false)
RendererSDK.CreateFont("Noto Sans Traditional Chinese", "fonts/NotoSansTC/NotoSansTC-Regular.otf", 400, false)

LoadFontWrapper("fonts/NotoSansTC/NotoSansTC-Bold.otf")
LoadFontWrapper("fonts/NotoSansTC/NotoSansTC-Regular.otf", true)

RendererSDK.CreateFont("Noto Sans Simplified Chinese", "fonts/NotoSansSC/NotoSansSC-Bold.otf", 700, false)
RendererSDK.CreateFont("Noto Sans Simplified Chinese", "fonts/NotoSansSC/NotoSansSC-Regular.otf", 400, false)

LoadFontWrapper("fonts/NotoSansSC/NotoSansSC-Bold.otf")
LoadFontWrapper("fonts/NotoSansSC/NotoSansSC-Regular.otf", true)

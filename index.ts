import { tryFindFile } from "github.com/octarine-public/wrapper/index"

function LoadFontWrapper(path: string, isFallback = false) {
	const realPath = tryFindFile(path)
	if (realPath !== undefined)
		LoadFont(realPath, isFallback)
	else
		console.error(`Failed to find font file ${path}`)
}

LoadFontWrapper("fonts/NotoSansTC/NotoSansTC-Bold.otf")
LoadFontWrapper("fonts/NotoSansTC/NotoSansTC-Regular.otf", true)

LoadFontWrapper("fonts/NotoSansSC/NotoSansSC-Bold.otf")
LoadFontWrapper("fonts/NotoSansSC/NotoSansSC-Regular.otf", true)

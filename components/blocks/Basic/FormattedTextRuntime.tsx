interface FormattedTextProps {
  text?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
}

export function FormattedTextRuntime({
  text = "<p>Click to edit formatted text</p>",
  fontSize = "text-base",
  fontWeight = "font-normal",
  color = "text-gray-900",
  textAlign = "text-left",
  margin = "my-4",
  padding = "px-0 py-0",
  fontFamily = "",
  lineHeight = "leading-relaxed",
  letterSpacing = "",
  backgroundColor = "",
  borderRadius = "",
  border = "",
  width = "auto",
  height = "auto",
  maxWidth = "none",
}: FormattedTextProps) {
  return (
    <div
      className={`
        prose prose-sm max-w-none
        ${fontSize} 
        ${fontWeight} 
        ${color} 
        ${textAlign} 
        ${margin} 
        ${padding}
        ${fontFamily}
        ${lineHeight}
        ${letterSpacing}
        ${backgroundColor}
        ${borderRadius}
        ${border}
        ${maxWidth !== "none" ? maxWidth : ""}
        [&_p]:my-2
        [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:my-4
        [&_h2]:text-xl [&_h2]:font-bold [&_h2]:my-3
        [&_h3]:text-lg [&_h3]:font-bold [&_h3]:my-3
        [&_h4]:text-base [&_h4]:font-bold [&_h4]:my-2
        [&_h5]:text-sm [&_h5]:font-bold [&_h5]:my-2
        [&_h6]:text-sm [&_h6]:font-bold [&_h6]:my-2
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-2
        [&_li]:my-1
        [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4
        [&_strong]:font-bold
        [&_em]:italic
        [&_a]:text-blue-600 [&_a]:underline
      `
        .trim()
        .replace(/\s+/g, " ")}
      style={{
        width: width !== "auto" ? width : undefined,
        height: height !== "auto" ? height : undefined,
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

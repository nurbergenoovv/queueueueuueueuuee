export default function BigText({text, style} : {text: string, style?: string}) {
  return (
   <span className={`text-2xl font-bold ${style && style}`}>{text}</span>
  )
}

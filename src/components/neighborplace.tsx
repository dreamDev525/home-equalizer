interface PlaceProps {
  src: string;
  text: string;
  cost: number;
  className?: string;
}

const Neighborplace = (props: PlaceProps) => {
  const {src, text, cost, className} = props

  return (
    <div className={`w-[110px] ${className}`}>
      <img src={src} className="w-[110px] h-[110px] rounded-lg"/>
      <span className="block text-[12px]">{text}</span>
      <span className="text-[14px] font-semibold">{`$${cost.toLocaleString()}`}</span>
    </div>
  )
}

export default Neighborplace
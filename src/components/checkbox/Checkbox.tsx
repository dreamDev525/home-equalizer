import { ChangeEvent, InputHTMLAttributes, ReactElement } from "react"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  text: string
  className?: string
  onChange: any
}

const Checkbox = (props: CheckboxProps): ReactElement => {
  const { name, text, className, onChange } = props

  return (
    <div className={`mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] ${className}`}>
      <input
        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]"
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}/>
      <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
        {text}
      </label>
    </div>
  )
}

export default Checkbox
export default function StatCard(props) {
  return (
    <div className="flex justify-between items-center px-6 py-3 border-[1px] border-lines md:flex-col md:flex-1 md:p-4 md:items-start xl:p-6">
      <span className="opacity-50 text-[0.5rem] leading-[1rem] tracking-[0.73px] font-bold xl:text-h4 xl:leading-h4">
        {props.text}
      </span>
      <span className="font-display text-[1.25rem] leading-[1.625rem] md:mt-[0.375rem] md:text-[1.5rem] xl:text-h2 xl:leading-h2">
        {props.value}
      </span>
    </div>
  )
}

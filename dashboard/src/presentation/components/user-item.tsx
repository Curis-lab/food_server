
function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-4">
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center"><p>GD</p></div>
        <div className="grow">
            <div className="text-[16px] font-bold">Nyan Lin</div>
            <div className="text-[12px] text-neutral-500">mathnyanlin@gmail.com</div>
        </div>
    </div>
  )
}

export default UserItem

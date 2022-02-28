

function Header() {
  return (
    <>
    <div className="">
    <div className="navbar bg-black">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">FeedbackUI</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered"/>
    </div>
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://media-exp1.licdn.com/dms/image/D4E35AQFRkE4VZyzTfg/profile-framedphoto-shrink_100_100/0/1643469776400?e=1646161200&v=beta&t=6emJ8l2dxA4lyuCeD-PdyMLAFKRQVscqFyV9h8WrKJY"/>
        </div>
      </label>
      <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Header;
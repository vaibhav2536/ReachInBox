function AppBar() {
  return (
    <div
      className="bg-black border-b border-[#25262B] fixed text-white h-16 w-full flex items-center justify-center"
      style={{ padding: "10px 100px", height: "64px", borderWidth: "0 0 1px 0", gap: "0px", opacity: "1" }}
    >
      <div>
        <img
          src="./src/assets/logo.png"
          alt="logo"
          style={{ width: "156.77px", height: "24px", gap: "0px", opacity: "1" }}
        />
      </div>
    </div>
  );
}

export default AppBar;

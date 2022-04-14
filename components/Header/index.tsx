import ScreenSearchDesktopRoundedIcon from "@mui/icons-material/ScreenSearchDesktopRounded";

export default function Header() {
  return (
    <div className="h-16 w-screen bg-[#145455]">
      <div className="flex text-center p-4 text-[#FFF]">
        <div>
          <ScreenSearchDesktopRoundedIcon fontSize="large"></ScreenSearchDesktopRoundedIcon>
        </div>
        <div className="ml-2 font-bold text-xl">jsParser</div>
      </div>
    </div>
  );
}

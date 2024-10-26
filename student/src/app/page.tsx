import Image from "next/image";

export default function Home() {
  return (


<div className="bg-[#044E83] flex justify-between px-5 items-center relative h-20">
  
<Image className="absolute top-5" src={"/logo.png"} width={75} height={75}/>
<h3 className="text-2xl font-bold ml-[150px]">Tuition Free Education Program on Latest Technologies
  </h3>
<nav className="flex justify-between gap-5">
  <div>About </div>
  <div>Contact</div>
  <div>Apply</div>
  <div>Jobs</div>
  <div>Result</div>
</nav>

</div>





  );
}

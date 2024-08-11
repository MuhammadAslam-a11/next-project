import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <dir><figure className="bg-red-400 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/Aslam.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hello, my name is Muhammad Aslam. I am from Rahim Yar Khan and currently pursuing a Bachelor’s degree in Cyber Security at Khwaja Fareed University of Engineering and Information Technology (KFUEIT).”
      </p>
    </blockquote>
    <figcaption className="">
      <div>
        Muhammad Aslam
      </div>
      <div>
        Cyber Security Engineer, KFUEIT
      </div>
    </figcaption>
  </div>
</figure></dir>
    </main>
  );
}

import React, { useState } from 'react';

function Ronder() {
  const [num, setNum] = useState(0);

  const handleAddClick = () => {
    const newNum = num + 1;
    if (newNum >= 1 && newNum <= 700) {
      setNum(newNum);
    } else {
      // يمكنك إضافة رسالة أو إجراء آخر هنا في حالة عدم تمرير الشرط
      console.log("العدد خارج النطاق من 1 إلى 100");
    }
  };

  return (
    <div>
<div className="flex items-center justify-center h-screen bg-green-900 shadow-lg shadow-cyan-500/50">
  <div className="container">
    <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          الأذكار</h2>
        <p className="text-xl  mt-10  font-extrabold tracking-tight leading-10 md:text-3xl">
          <a className="hover:underline" ></a>لا اله الا الله وحده لاشريك له ,له الملك وله الحمد وهو على كل شيء قدير</p>
         <h1 className='text-green-800 text-xl  '>700 مرة</h1>
          <h3 className='  mt-10   text-3xl'><h1>{num}</h1></h3>
      </div>
      <div className="flex flex-wrap mt-10 justify-center">
       <div className="m-3">
           <button className="mx-auto md:w-26 bg-green-800 tracking-wide text-white font-bold rounded border-2 border-green-700 hover:border-green-800 hover:bg-green-600 hover:text-white shadow-md py-4 px-8 inline-flex items-center outline-8" onClick={handleAddClick}>قراءة</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Ronder;
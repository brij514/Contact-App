import React from "react";

const NoContact = () => {
  return (
    <>
      <div className="items-center flex self-center justify-center h-[80vh]">
        <div className="flex items-center gap-3 justify-center">
           <div>
            <img src="/NoContact.png" alt="" />
           </div>
          
          <h1 className="text-white text-2xl font-semibold">No Contacts</h1>
        </div>
      </div>
    </>
  );
};

export default NoContact;

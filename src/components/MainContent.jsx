import React from "react";
import ContentBtn from "./ContentBtn";
import MainBtnContentChoice from "./MainBtnContentChoice";
import ImgCard from "./ImgCard";

const MainContent = () => {
  const mainContentBtn = [
    {
        name : 'Home',
        icon : <i className="bi bi-house-door-fill"></i>
    },
    {
        name : 'Photos',
        icon : <i className="bi bi-camera-fill"></i>
    },
    {
        name : 'Video',
        icon : <i className="bi bi-camera-reels-fill"></i>
    },
    {
        name : 'Illustration',
        icon : <i className="bi bi-brush-fill"></i>
    },
  ]  
  const contentChoiceBtn = [
    "All",
    "Nature",
    "Animal",
    "Wallpaper",
    "Mountain",
    "Person",
    "women",
    "children",
    "food",
    "game",
  ];

  const img = [
    {
      id: 1,
      url: './images/image1.jpg' 
    },
    {
      id: 2,
      url: './images/image2.jpg' 
    },
    {
      id: 3,
      url: './images/image3.jpg'
    },
    {
      id: 4,
      url: './images/image2.jpg'
    },
    {
      id: 5,
      url: './images/image3.jpg'
    },
    {
      id: 6,
      url: './images/image3.jpg'
    },
    {
      id: 7,
      url: './images/image4.jpg'
    },
    {
      id: 8,
      url: './images/image4.jpg'
    },
    {
      id: 9,
      url: './images/image4.jpg'
    },
  ]
  return (
    <>
      <main className="w-full h-[3040px] max-h-[3040px] ">
        <div className="w-full h-48 flex flex-col justify-center items-center overflow-x-scroll space-y-8 content_btn_Scroller">
          <div className=" w-full py-5 px-16 flex justify-center items-center space-x-8">
            {
                mainContentBtn.map((item,index)=>{
                    return(
                        <MainBtnContentChoice key={index} name={item} icon={item}/>
                    )
                })
            }
          </div>
          {/* <div className="w-full flex justify-center items-center">
            {contentChoiceBtn.map((item, index) => {
              return <ContentBtn key={index} name={item} />;
            })}
          </div> */}
        </div>
        <section className="w-full h-full py-8 px-8">
              <div className="w-full h-full overflow-hidden ImageCollectionGrid">
              <div className="w-full h-full ">
                <div className="w-full h-full overflow-hidden imageContainerCol1">
                  {
                    img.map((item,index)=>{
                      return(
                          <ImgCard key={index} url={item}/>
                      )
                    })
                  }
                </div>
              </div>
              </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;

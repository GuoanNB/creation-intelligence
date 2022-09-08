import './index.css';
import React from 'react';
import './index.css';

const Footer = () => {
    // const footRef = React.useRef(null);
    // const [isShow, setIsShow] = React.useState(false);
    // React.useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    //         //windowHeight是可视区的高度
    //         var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //         //scrollHeight是滚动条的总高度
    //         var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
    //           console.log("到了aaa底部");
    //           //滚动条到底部的条件
    //         if(scrollTop+windowHeight === scrollHeight){
    //           //到了这个就可以进行业务逻辑加载后台数据了
    //           console.log("到了底部");
    //         setIsShow(true);
    //           // window.onscroll = '' 用于解除绑定
    //         }else{
    //             setIsShow(false);
    //         }  
    //     })

    //   }, [])
  return (
             <div className="AppFooter">
                © 2022 MICROSOFT. ALL RIGHTS RESERVED.
            </div>


  );
}


export default Footer;
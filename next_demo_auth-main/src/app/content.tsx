import { StoreType } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "./firebase/firebase";

export default function content() {
    const router = useRouter();
    const userStore = useSelector((store: StoreType) => store.user);
    // console.log("userStore", userStore)
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState(false)

    useEffect(()=>{
      firebase.test();
      setIsClient(true)
    },[])
  return (
    <div className='home_page'>
    <header>
      <div className='left'>
        <img src="https://inkythuatso.com/uploads/images/2022/05/hinh-cute-meo-12-13-59-29.jpg"/>
      </div>
      <div className='right'>
          {
            userStore.data ? (
              <>
                {userStore.data?.userName}
              </>
            ) : (
              <div className='userBox'>
                  <button onClick={() => {
                    router.push('/auth')
                  }} className='btn btn-primary'>register</button>
                  <button className='btn btn-success'>login</button>
              </div>
            )
          }
      </div>
    </header>
  </div>
  )
}

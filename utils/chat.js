export const record=(setmsg)=>{
    let chunks=[]
    navigator.mediaDevices.getUserMedia({
        audio:true,video:false
    }).then(stream=>{
        const recorder=new MediaRecorder(stream)
        recorder.start()
        setTimeout(() => {
            recorder.stop()
        }, 4000);
        recorder.ondataavailable=({data})=>{
            chunks.push(data)
        }
        recorder.onstop=()=>{
          const blob=new Blob(chunks,{type:'audio/ogg;codecs=opus'})
          chunks=[]
          const url=URL.createObjectURL(blob)
          setmsg(prev=>[...prev,
            {
                msg:'',
                audio:url,
                time: "12:00pm",
                sender: "ashish",
                senderimg: "/ashish.jpg",
            },])
          return url
        }
    })
}
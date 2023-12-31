export const record=(e,setmsg)=>{
    
    let chunks=[]
    navigator.mediaDevices.getUserMedia({
        audio:true,video:false
    }).then(stream=>{
        var recorder=new MediaRecorder(stream)
        if(!e.target.classList.contains('recording')){
            e.target?.classList.add('recording')
            recorder.start()
        }else{
            recorder.stop()
            e.target?.classList.remove('recording')
        }
        

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
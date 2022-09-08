import styles from '../styles/fileviewer.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  MdKeyboardArrowLeft,
  MdOutlineClose,
  MdKeyboardArrowRight,
} from 'react-icons/md'
import { BsArrowDown, BsTrash } from 'react-icons/bs'
import { getFileExtension, setThumbnail } from '@/utils/files'
import Pdfeditor from './pdfeditor'
import { RiFileEditFill, RiImageEditFill } from 'react-icons/ri'
import dynamic from 'next/dynamic'
import { AiOutlinePlus } from 'react-icons/ai'
import Upload from './upload'
import { IoMdClose } from 'react-icons/io'
const ImageEditor = dynamic(() => import('../components/imgeditor'), {
  ssr: false,
})

const Fileviewer = ({ index = 1, files, handler, edit, apiHit }) => {
  const [uploader, setUploader] = useState(false)
  const [data, setData] = useState({ index: index, files: files, open: open })
  const [editor, setEditor] = useState(edit || false)
  useEffect(() => {
    index &&
      document.querySelector(`.${styles.active}`)?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
        inline: 'center',
      })
  }, [data.index, index])

  if (apiHit) {
    return
  }

  return (
    <>
      {editor && apiHit ? (
        data.files[index].type.includes('image') ? (
          <ImageEditor
            setEditor={setEditor}
            fileName={data.files[index].name}
            handler={handler}
            file={URL.createObjectURL(data.files[index])}
          />
        ) : (
          <Pdfeditor
            setEditor={setEditor}
            handler={handler}
            file={URL.createObjectURL(data.files[index])}
          />
        )
      ) : (
        ''
      )}
      {apiHit ? (
        <h1>Loading....</h1>
      ) : (
        <div className={`${styles.body} z-50`}>
          <div className={styles.index}>
            {data.index} / {data.files.length}
          </div>
          <MdKeyboardArrowLeft
            onClick={e => setData({ ...data, index: data.index - 1 })}
            className={`${styles.navigation} ${data.index <= 1 ? 'disabled' : ''
              } ${styles.left}`}
            size={20}
            color="#fff"
          />
          <MdKeyboardArrowRight
            onClick={e => setData({ ...data, index: data.index + 1 })}
            className={`${styles.navigation} ${data.index == data.files.length ? 'disabled' : ''
              } ${styles.right}`}
            size={20}
            color="#fff"
          />
          <div className={`${styles.tool} flex items-center`}>
            <AiOutlinePlus
              onClick={e => setUploader(true)}
              title="add file"
              size={18}
            />
            <a
              href={URL.createObjectURL(
                new Blob([data.files[index]], {
                  type: data.files[index]?.type,
                }),
              )}
              download
            ></a>
            <BsArrowDown
              onClick={e => e.currentTarget.previousElementSibling.click()}
              title="download"
              size={18}
            />
            <BsTrash
              onClick={e => confirm('Are you sure to delete ?')}
              title="delete"
              size={18}
            />
            {data?.files[index]?.type.includes('pdf') ? (
              <RiFileEditFill
                onClick={e => setEditor(true)}
                title="Edit"
                size={18}
              />
            ) : data.files[index]?.type.includes('image') ? (
              <RiImageEditFill
                onClick={e => setEditor(true)}
                title="Edit"
                size={18}
              />
            ) : (
              ''
            )}
            <MdOutlineClose
              title="close"
              onClick={e => handler(false)}
              size={20}
            />
          </div>
          <div className={`${styles.content}  relative`}>
            {data.files[index]?.type.includes('image') ? (
              <Image
                src={URL.createObjectURL(data.files[index])}
                objectFit="contain"
                alt=""
                layout="fill"
              ></Image>
            ) : (
              <iframe
                src={
                  data?.files[index]?.type.includes('document')
                    ? `https://view.officeapps.live.com/op/embed.aspx?src=${URL.createObjectURL(
                      data.files[index],
                    )}`
                    : URL.createObjectURL(data?.files[index])
                }
                width="100%"
                height="565"
                frameBorder={0}
              ></iframe>
            )}
          </div>
          <div className={`${styles.nav} flex items-center relative`}>
            <div
              className={`${styles.items} absolute flex flex-nowrap justify-start md:justify-center  items-center`}
            >
              {data?.files.map((f, i) => {
                return (
                  <span
                    onClick={e => setData({ ...data, index: i + 1 })}
                    key={i}
                    className={`flex ${data.index === i + 1 ? styles.active : ''
                      } justify-center relative items-center`}
                  >
                    <Image
                      className="cursor-pointer"
                      objectFit="contain"
                      src={`/images/icons/${setThumbnail(f.name)}.png`}
                      layout="fill"
                      alt=""
                    ></Image>
                    {/* <i className="absolute top-1/2 text-slate-400 bg-slate-100">{`${f.name.substr(0,4)}.${getFileExtension(f.name)}`}</i> */}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      )}
      {uploader && (
        <div className={`${styles.upload}`}>
          <button
            title="close uploader"
            type="button"
            className="absolute rounded-bl-md transition-all duration-500 z-10 cursor-pointer shadow-red-50 bg-slate-50 outline-none border-none right-full top-0 px-4 py-2 "
            onClick={e => {
              e.stopPropagation()
              setUploader(false)
            }}
          >
            <IoMdClose size={20} />
          </button>
          <Upload />
        </div>
      )}
    </>
  )
}
export default Fileviewer

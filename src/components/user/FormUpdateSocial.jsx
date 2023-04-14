import { updateUserSocials } from '@/services/supabase'
import { userUpdateState } from '@/store/user/thunks'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteConfirm from '../ui/DeleteConfirm'

const FormUpdateSocial = ({ user }) => {
  const { id: idAutenticated } = useSelector(state => state.auth)
  const { id: idUser } = useSelector(state => state.user)
  const [isConfirm, setIsConfirm] = useState(false)

  const dispatch = useDispatch()

  const userSocials = user.socials.reduce((acc, cur) => {
    acc[cur.name] = cur
    return acc
  }, {})

  const [file, setFile] = useState(null)
  const [twitterForm, setTwitterForm] = useState(userSocials.twitter.user)
  const [instagramForm, setInstagramForm] = useState(userSocials.instagram.user)
  const [twitchForm, setTwitchForm] = useState(userSocials.twitch.user)
  const [userYoutubeForm, setUserYoutubeForm] = useState(userSocials.youtube.user)
  const [webForm, setWebForm] = useState(userSocials.web.user)

  const getImage = async (e) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'AdivinaQue')
    formData.append('api_key', '874151438335991')
    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/caraje/image/upload',
        {
          method: 'POST',
          body: formData
        }
      )
      const data = await response.json()
      return data.public_id
    } catch (error) {
      console.log(error)
    }
  }

  const postDataUser = async (e) => {
    const user = {

      avatarForm: await getImage(e),
      twitterForm,
      instagramForm,
      twitchForm,
      userYoutubeForm,
      webForm
    }
    await updateUserSocials(user)

    const socials = [
      {
        name: 'twitter',
        user: twitterForm,
        url: 'https://twitter.com/'
      },
      {
        name: 'instagram',
        user: instagramForm,
        url: 'https://www.instagram.com/'
      },
      {
        name: 'youtube',
        user: userYoutubeForm,
        url: 'https://www.youtube.com/@'
      },
      {
        name: 'twitch',
        user: twitchForm,
        url: 'https://www.twitch.tv/'
      },
      {
        name: 'web',
        user: webForm,
        url: webForm
      }
    ]
    const avatar = user.avatarForm || user.imgAvatar
    const dataUser = { socials, avatar }
    dispatch(userUpdateState(dataUser))
  }

  const handleForm = async (e) => {
    e.preventDefault()
    await postDataUser()
  }

  const handleDeleteUser = () => {
    if (idAutenticated === idUser) {
      console.log('hola')
      setIsConfirm(true)
    }
  }

  return (
    <>
      {
      isConfirm && <DeleteConfirm back={setIsConfirm} />
    }
      <form
        className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-end items-end'
        onSubmit={handleForm}
      >
        <label className='flex flex-col text-xs gap-2'>
          Twitter:
          <input
            className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
            type='text'
            placeholder='Twitter'
            value={twitterForm}
            onChange={(e) => setTwitterForm(e.target.value)}
          />

        </label>
        <label className='flex flex-col text-xs gap-2'>
          Instagram:
          <input
            className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
            type='text'
            placeholder='Instagram'
            value={instagramForm}
            onChange={(e) => setInstagramForm(e.target.value)}
          />

        </label>
        <label className='flex flex-col text-xs gap-2'>
          Twitch:
          <input
            className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
            type='text'
            placeholder='Twitch'
            value={twitchForm}
            onChange={(e) => setTwitchForm(e.target.value)}
          />

        </label>
        <label className='flex flex-col text-xs gap-2'>
          Youtube:
          <input
            className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
            type='text'
            placeholder='YouTube'
            value={userYoutubeForm}
            onChange={(e) => setUserYoutubeForm(e.target.value)}
          />

        </label>
        <label className='flex flex-col text-xs gap-2'>
          Web:
          <input
            className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
            type='text'
            placeholder='Tu web'
            value={webForm}
            onChange={(e) => setWebForm(e.target.value)}
          />
        </label>

        <label className='flex flex-col text-xs gap-2'>
          Avatar:
          <input
            className='w-full p-2 border-2 border-adivinaGreen rounded-lg bg-transparent text-white text-base font-normal'
            type='file'
            onChange={e => setFile(e.target.files[0])}
          />
        </label>
        <div className='w-full flex gap-4 ' />
        <div className='w-full flex flex-col sm:flex-row sm-flex-row gap-4 '>
          <button
            className='w-full sm:w-1/2 rounded-lg bg-adivinaGreen py-2 text-[#333] font-bold hover:scale-105 hover:brightness-110 transition-all '
          >
            Actualizar
          </button>
          <button
            className='w-full sm:w-1/2 rounded-lg bg-red-700 py-2 text-white font-bold hover:scale-105 hover:brightness-110 transition-all '
            type='button'
            onClick={handleDeleteUser}
          >
            Eliminar Usuario
          </button>
        </div>
      </form>
    </>
  )
}

export default FormUpdateSocial

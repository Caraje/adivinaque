import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_KEY)

export async function createUserWithEmail (userName, email, password) {
  const { data, error } = await supabase.auth.signUp(
    {
      email,
      password,
      options: {
        data: {
          userName,
          imgAvatar: 'AdivinaQue/akxmwc0cpoffp1avtg8h.webp',
          url: `/${userName.toLowerCase().trim().replace(' ', '-')}`,
          isActive: true,
          socials: [
            {
              name: 'twitter',
              user: '',
              url: 'https://twitter.com/'
            },
            {
              name: 'instagram',
              user: '',
              url: 'https://www.instagram.com/'
            },
            {
              name: 'youtube',
              user: '',
              url: 'https://www.youtube.com/@'
            },
            {
              name: 'twitch',
              user: '',
              url: 'https://www.twitch.tv/'
            },
            {
              name: 'web',
              user: '',
              url: ''
            }
          ],
          categories: {
            cinema: {
              corrects: 0,
              errors: 0,
              totalPoints: 0,
              positionRank: 0,
              levels_completed: []
            },
            series: {
              corrects: 0,
              errors: 0,
              totalPoints: 0,
              positionRank: 0,
              levels_completed: []
            },
            videogames: {
              corrects: 0,
              errors: 0,
              totalPoints: 0,
              positionRank: 0,
              levels_completed: []
            }
          }
        }
      }
    }
  )
  return (data, error)
}

export const loginWithEmail = async (email, password) => {
  const data = await supabase.auth.signInWithPassword({
    email,
    password
  })

  !data.error && window.location.replace('/')
  return (data)
}
export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()

  return (user)
}

export async function getUserList () {
  const { data: { users }, error } = await supabase.auth.admin.listUsers()
  error && console.log(error)
  return (users)
}

export async function updateUserSocials (user) {
  const { nameForm, avatarForm, instagramForm, twitchForm, twitterForm, userYoutubeForm, webForm } = user

  const { data } = await supabase.auth.updateUser({
    data: {
      nameForm,
      url: `/${nameForm}`,
      imgAvatar: avatarForm,
      socials: [
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
    }
  })
  window.location.reload()
  return data
}
export async function updateUserScore (score) {
  const scoreUser = score

  const { data } = await supabase.auth.updateUser({
    data: {
      categories: scoreUser
    }
  })
  // window.location.reload()
  return data
}

export async function deleteUser (id) {
  const data = await supabase.auth.admin.deleteUser(id)
  window.location.replace('/')
  return data
}

export async function logoutUser () {
  const { error } = await supabase.auth.signOut()
  window.location.reload()

  return error
}

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
          imgAvatar: '',
          url: `/${userName}`,
          isActive: true,
          socials: [
            {
              name: 'twitter',
              user: ''
            },
            {
              name: 'instagram',
              user: ''
            },
            {
              name: 'youtube',
              user: ''
            },
            {
              name: 'twitch',
              user: ''
            },
            {
              name: 'web',
              user: ''
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
  console.log('test')
  const data = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return (data)
}
export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()

  return (user)
}

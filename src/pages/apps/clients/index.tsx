import { GetStaticProps, InferGetStaticPropsType } from 'next/types'
import ClientsTable from '@/components/ClientsTable'

const UserList = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <ClientsTable initialData={apiData} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  //const res = await axios.get('/cards/statistics')
  //CardStatsType
  const apiData: any = [{id: 1, fullName: 'Arthur Lopes', username: 'ar7hvr',
  role: 'Cliente',
  email: 'arthurllopes@gmail.com',
  status: 'active',
  contact: '21970021384',
  }]

  return {
    props: {
      apiData
    }
  }
}

export default UserList

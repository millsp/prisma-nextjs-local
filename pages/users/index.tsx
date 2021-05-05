import { GetServerSideProps } from 'next'
import Link from 'next/link'

import { User } from '../../interfaces'
import Layout from '../../components/Layout'

import { PrismaClient, Prisma } from ".prisma/client"

const prisma = new PrismaClient()

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    {Prisma.prismaVersion.client}
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    {JSON.stringify(items)}
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await prisma.user.findMany()

  return { props: { items } }
}

export default WithStaticProps

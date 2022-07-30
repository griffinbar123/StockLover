import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {

  const query = context.query;
  const ticker: string = query.ticker as string;

  const key = process.env.NEXT_PUBLIC_POLYGON_API_KEY;
  const url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${key}`;
  const response = await fetch(url);
  const data = await response.json();
  
  if (data.status === 'ERROR') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  data["ticker"]=ticker;
    return {
      props: { data }, // will be passed to the page component as props
    }
}


function ValueCard({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>{data.ticker}: {data.pc}</div>
  )
}


const Details = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ValueCard data={data} />
  )
}

export default Details
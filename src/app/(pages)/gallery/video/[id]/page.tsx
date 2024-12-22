import { Suspense } from "react"
import { ErrorBoundary } from 'react-error-boundary';

import { HydrateClient } from "@/app/server/routers/_app"
import Loading from "./loading";
import VideoContainer from "../_components/video-container";

type Params = Promise<{ id: string }>

const Page = async ({ params }: { params: Params }) => {
  const { id } = await params

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<Loading />}>
          <VideoContainer id={id} />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}

export default Page
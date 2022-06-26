import { RoadmapItems } from './RoadmapItems'

export const RoadmapMobile = () => {
  return (
    <>
      <div className="md:hidden">
        <p className="text-5xl leading-none px-3 mb-4">Roadmap</p>
        <div className="flex flex-col gap-3">
          <RoadmapItems />
        </div>
      </div>
    </>
  )
}

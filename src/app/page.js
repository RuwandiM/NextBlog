import Image from 'next/image'
import {allBlogs} from 'contentlayer/generated';
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  return (
    <>
    <HomeCoverSection blogs={allBlogs} />
    <FeaturedPosts blogs={allBlogs}/>
    <RecentPosts blogs={allBlogs}/>
    </>
  )
}


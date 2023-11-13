import {compareDesc, parseISO} from "date-fns";

//used to concatenate different number of classname together
export const cx = (...classNames) => classNames.filter(Boolean) .join(" ");

export const sortBlogs = (blogs) => {
    return blogs.slice().sort((a,b)=> compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
}
import { NavLink } from "react-router-dom";
import BlogItemStyleWrapper from "./BlogItem.style";
import { GoArrowRight } from "react-icons/go";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { getBlogImageUrl } from "../../../utils/image";

const BlogItem = ({ id, thumbnail, category, date, title, details, delay }) => {
  return (
    <ScrollAnimate delay={delay}>
      <BlogItemStyleWrapper>
        <NavLink to={`/blog/${id}`} className="letest-blog-img">
          <img src={getBlogImageUrl(thumbnail)} alt="post thumbnail" loading="lazy"/>
        </NavLink>
        <div className="letest-blog-info">
          <div className="letest-blog-info-inner">
            <h5>
              <span>{category}</span> . {date}
            </h5>
            <h4>
              <NavLink to={`/blog/${id}`}>{title}</NavLink>
            </h4>
            <p>{details}</p>
            <NavLink to={`/blog/${id}`} className="text-link">
              <span>Read More</span>
              <GoArrowRight />
            </NavLink>
          </div>
        </div>
      </BlogItemStyleWrapper>
    </ScrollAnimate>
  );
};

export default BlogItem;
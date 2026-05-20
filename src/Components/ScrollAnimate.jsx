import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const AnimatedWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "animate" && prop !== "delay",
})`
  opacity: 0;
  transform: translateY(30px);
  will-change: transform, opacity;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${({ delay }) => delay}ms;

  ${({ animate }) =>
    animate &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const ScrollAnimate = ({ children, delay = 0 }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <AnimatedWrapper ref={ref} animate={isInView} delay={delay}>
      {children}
    </AnimatedWrapper>
  );
};

export default ScrollAnimate;

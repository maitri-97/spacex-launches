import { FC } from "react";
import DefaultCoverImage from "../../assets/images/cover-img.jpg";
import styled from "styled-components";
import Title, { PageTitleProps } from "./components/Title";
import Container from "../container";

interface Props extends PageTitleProps {
  coverImage?: string;
}

const Banner: FC<Props> = ({ pageTitle, coverImage }) => {
  return (
    <>
      <section className="banner-section">
        <BannerWrap
          $coverImage={coverImage || DefaultCoverImage}
          className="flex items-center justify-center relative"
        >
          {pageTitle && (
            <Container>
              <Title pageTitle={pageTitle} />
            </Container>
          )}
        </BannerWrap>
      </section>
    </>
  );
};

export default Banner;

const BannerWrap = styled.div<{ $coverImage?: string | "" }>`
  background: url(${(props) => props.$coverImage}) center center;
  background-size: cover;
  height: 60vh;
  min-height: 450px;
  &: after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
`;

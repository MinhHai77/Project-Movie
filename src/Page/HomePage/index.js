import React, { useEffect } from "react";
import Sidebar from "~/components/Sidebar";
import SearchMovie from "~/Page/SearchMovie";
import NavBar from "~/components/Navbar";
import ContentPage from "~/Page/ContentPage";
import { useDispatch } from "react-redux";
import { getMovieBanner } from "~/reducers/banner";
import { getListMovie } from "~/reducers/listMovie";
import { getShowTimeTheaterInfo } from "~/reducers/showTime";
import ShowTimes from "~/Page/ShowTimes";
import {
  Container,
  ContainerHome,
  LeftHome,
  RightHome,
  LeftContent,
  LeftSide,
  LeftPage,
  ContainerShowTime,
} from "./HomePageElement";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieBanner());
    dispatch(getListMovie());

    dispatch(getShowTimeTheaterInfo());
  }, []);
  return (
    <>
      <Container>
        <ContainerHome>
          <LeftHome>
            <NavBar />
            <LeftContent>
              <LeftSide>
                <Sidebar />
              </LeftSide>
              <LeftPage>
                <ContentPage />
              </LeftPage>
            </LeftContent>
          </LeftHome>
          <RightHome>
            <SearchMovie />
          </RightHome>
        </ContainerHome>
        <ContainerShowTime>
          <ShowTimes />
        </ContainerShowTime>
      </Container>
    </>
  );
};

export default HomePage;

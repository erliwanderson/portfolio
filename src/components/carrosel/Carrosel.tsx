interface ICarosel {
  children: JSX.Element[];
}

import useCarrosel from "./useCarrosel";

export function Carrosel({ children }: ICarosel) {
  const { settings, Slider } = useCarrosel();

  return (
    <div className="">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

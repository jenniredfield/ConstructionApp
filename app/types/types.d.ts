interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imgSrc: string;
}

type RootStackParamList = {
  HomeScreen: undefined;
  PLP: undefined;
  LoginScreen: undefined;
};

namespace ReactNavigation {
  interface RootParamList extends RootStackParamList {}
}
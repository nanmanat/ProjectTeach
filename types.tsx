export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Signin: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Classes: undefined;
  Profile: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type User = {
  id: string;
  name: string;
  imageUri: string;
};

export type Massage = {
  id: string;
  content: string;
  createdAt: string;
};

export type ClassRoom = {
  id: string;
  users: [User];
  lastMassage: Massage;
};
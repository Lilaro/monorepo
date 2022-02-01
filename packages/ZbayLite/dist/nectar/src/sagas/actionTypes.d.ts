import { ActionCreator, AnyAction } from 'redux';
interface ActionsBasicType {
    [k: string]: ActionCreator<AnyAction>;
}
export declare type ActionsType<Actions extends ActionsBasicType> = {
    [k in keyof Actions]: ReturnType<Actions[k]>;
};
export declare type Keys<Actions> = keyof Actions;
export declare type ActionFromMapping<Actions> = Actions[Keys<Actions>];
export declare enum SocketActionTypes {
    CONNECT_TO_WEBSOCKET_SERVER = "connectToWebsocketServer",
    GET_PUBLIC_CHANNELS = "getPublicChannels",
    RESPONSE_GET_PUBLIC_CHANNELS = "responseGetPublicChannels",
    REQUEST_PEER_ID = "requestPeerId",
    SEND_PEER_ID = "sendPeerId",
    SEND_MESSAGES_IDS = "sendIds",
    ASK_FOR_MESSAGES = "askForMessages",
    RESPONSE_ASK_FOR_MESSAGES = "responseFetchAllMessages",
    SUBSCRIBE_FOR_TOPIC = "subscribeForTopic",
    REGISTER_USER_CERTIFICATE = "registerUserCertificate",
    SEND_USER_CERTIFICATE = "sendUserCertificate",
    SAVE_CERTIFICATE = "saveCertificate",
    RESPONSE_GET_CERTIFICATES = "responseGetCertificates",
    SEND_MESSAGE = "sendMessage",
    MESSAGE = "message"
}
export {};

import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumEnum_StatePlayFieldUpdateOperationsInput } from "../inputs/NullableEnumEnum_StatePlayFieldUpdateOperationsInput";
import { NullableEnumEnum_TypeGamesFieldUpdateOperationsInput } from "../inputs/NullableEnumEnum_TypeGamesFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MatchUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
    gameSite?: StringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    price?: NullableStringFieldUpdateOperationsInput | undefined;
    commentHost?: NullableStringFieldUpdateOperationsInput | undefined;
    dateAndTime?: DateTimeFieldUpdateOperationsInput | undefined;
    maxPlayers?: NullableIntFieldUpdateOperationsInput | undefined;
    currentPlayers?: NullableIntFieldUpdateOperationsInput | undefined;
    statePlay?: NullableEnumEnum_StatePlayFieldUpdateOperationsInput | undefined;
    typeGames?: NullableEnumEnum_TypeGamesFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}

import { eventModel } from "@/models/event-models"
import { replaceMongoIdInArray } from "@/utils/data-util";


export async function getAllEvents() {
    const allEvents = await eventModel.find().lean();

    return replaceMongoIdInArray(allEvents);
}


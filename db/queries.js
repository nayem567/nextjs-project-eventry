import { eventModel } from "@/models/event-models"
import { replaceMongoIdInArray } from "@/utils/data-util";


export async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
}

export async function getEventById(id) {
    const event = await eventModel.findById(id).lean();
    return event;
}


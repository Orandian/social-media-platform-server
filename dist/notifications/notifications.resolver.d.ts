import { NotificationsService } from "./notifications.service";
import { Notification } from "./models/notification.model";
export declare class NotificationsResolver {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    notifications(user: any): Promise<Notification[]>;
    markAsRead(id: string): Promise<Notification>;
}

export const toDate = (value: Date | string): Date => {
    const date = new Date(value);
    return date.getFullYear() > 1 ? date : new Date();
};
  
export const formatDate = (value?: Date | string) => {
    if (!value) {
      return "";
    }

    const date = toDate(value);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
};
  
export const formatTime = (value?: Date | string) => {
    if (!value) {
        return "";
    }

    const date = toDate(value);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
};

export const isToday = (date: Date | string) => {
    const today = new Date(),
            d = new Date(date)

    return d.getDate() === today.getDate() && 
        d.getMonth() === today.getMonth() && 
        d.getFullYear() === today.getFullYear()
  }
  
export const formatDateTime = (value?: Date | string) => {
    if (!value) {
        return "";
    }
    return isToday(value) ? `${formatTime(value)}` : `${formatDate(value)}`;
};

import {
  differenceInHours,
  format,
  differenceInMinutes,
  differenceInDays,
  differenceInWeeks
} from "date-fns";

export function returnDistanceDate(date: Date) {
  // Pega a diferenca de horas
  const distanceInHours = differenceInHours(new Date(), new Date(date));

  if (distanceInHours < 1) {
    const minutes = differenceInMinutes(new Date(), new Date(date));
    return minutes === 0 ? "Postado agora" : `Há ${minutes} minutos`;
  }

  if (distanceInHours < 24) {
    return format(new Date(date), "'Há' h 'hora'");
  }

  if (distanceInHours > 24 && distanceInHours < 168) {
    const distanceInDays = differenceInDays(new Date(), new Date(date));

    return `Há ${distanceInDays} dias`;
  }

  if (distanceInHours > 168) {
    const distanceInMonths = differenceInDays(new Date(), new Date(date));

    if (distanceInMonths < 1) {
      const distanceInWeeks = differenceInWeeks(new Date(), new Date(date));

      return `Há ${distanceInWeeks} semanas`;
    } else {
      return `Há ${distanceInMonths} meses`;
    }
  }

  return distanceInHours;
}

import ClassRoom from './0-classroom';

/**
 * Creates an array of {@link ClassRoom}s with specific size.
 * @returns array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}

const POOL = [
  "1519741497674-611481863552",
  "1519225421980-715cb0215aed",
  "1606800052052-a08af7148866",
  "1519167758481-83f550bb49b3",
  "1465495976277-4387d4b0b4c6",
  "1522673607200-164d1b6ce486",
  "1511285560929-80b456fea0bc",
  "1503919545889-aef636e10ad4",
  "1583939003579-730e3918a45a",
  "1519671482749-fd09be7ccebf",
  "1544005313-94ddf0286df2",
  "1492684223066-81342ee5ff30",
  "1583394838336-acd977736f90",
  "1533105079780-92b9be482077",
  "1606216794074-735e91aa2c92",
  "1552058544-f2b08422138a",
  "1511578314322-379afb476865",
  "1556742049-0cfed4f6a45d",
  "1556742212-5b321f3c261b",
  "1517841905240-472988babdf9",
  "1465101162946-4377e57745c3",
  "1487412720507-e7ab37603c6f",
  "1441986300917-64674bd600d8",
  "1600880292203-757bb62b4baf",
  "1560184897-ae75f418493e",
  "1520854221256-17451cc331bf",
  "1521791136064-7986c2920216",
  "1573496359142-b8d87734a5a2",
  "1580489944761-15a19d654956",
  "1607346256330-dee7af15f7c5",
  "1544725176-7c40e5a71c5e",
  "1571019613454-1cb2f99b2d8b",
  "1519689680058-324335c77eba",
  "1554080353-a576cf803bda",
  "1524504388940-b1c1722653e1",
  "1531123897727-8f129e1688ce",
  "1500648767791-00dcc994a43e",
  "1508214751196-bcfd4ca60f91",
  "1494790108377-be9c29b29330",
  "1633332755192-727a05c4013d",
  "1573497019940-1c28c88b4f3e",
  "1556157382-97eda2d62296",
  "1560250097-0b93528c311a",
  "1573164713988-8665fc963095",
  "1521572163474-6864f9cf17ab",
  "1607748862156-7c548e7e98f4",
  "1515934751635-c81c6bc9a2d8",
] as const;

/** Deterministic Unsplash placeholder URL, sized and cropped on request. */
export function studioImage(
  index: number,
  { w = 1200, h, q = 75 }: { w?: number; h?: number; q?: number } = {},
) {
  const id = POOL[index % POOL.length];
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}

/** Portrait headshot pool for testimonials / team, offset from the main pool. */
export function portraitImage(index: number, size = 200) {
  return studioImage(index + 30, { w: size, h: size, q: 80 });
}

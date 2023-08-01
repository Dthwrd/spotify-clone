"use client";

import useGetSongById from "@/hooks/useGetSongsById";
import useLoadSongs from "@/hooks/useLoadSongs";
import usePlayer from "@/hooks/usePlayer";
import React from "react";
import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongs(song!);

  if (!songUrl || !song || !player.activeId) return null;

  return (
    <div className="fixed bottom-0 bg-black w-full h-[80px] px-4">
      <PlayerContent key={songUrl} songUrl={songUrl} song={song} />
    </div>
  );
};

export default Player;

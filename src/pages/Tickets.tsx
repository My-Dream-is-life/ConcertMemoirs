import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from 'antd';
import TicketCard from '@/components/molecules/TicketCard';
import { tickets } from '@/static/ticket';
import type { TicketItem } from '@/types';
import '@/css/ticketModal.css';

const Tickets: FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<TicketItem>();
  const [modalOpen, setModalOpen] = useState(false);

  const total = tickets.length;
  const cityTotal = Array.from(new Set(tickets.map((ticket) => ticket.name))).length;

  const handleTicketClick = (ticket: TicketItem) => {
    setSelectedTicket(ticket);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-600/20 blur-[120px]" />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-purple-500/15 blur-[100px]"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-72 w-72 animate-pulse rounded-full bg-purple-400/10 blur-[80px]"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative px-4 pb-16 pt-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              <span className="text-sm font-medium text-purple-300">珍藏票根</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300 bg-clip-text text-transparent">
                我的演唱会门票
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-purple-300/70">
              每一张票根，都是一段不可复制的回忆
            </p>

            <div className="mt-8 flex justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">{total}</div>
                <div className="text-sm text-purple-400/60">场演唱会</div>
              </div>
              <div className="w-px bg-purple-500/30" />
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">{cityTotal}</div>
                <div className="text-sm text-purple-400/60">座城市</div>
              </div>
              <div className="w-px bg-purple-500/30" />
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">2024 - 2025</div>
                <div className="text-sm text-purple-400/60">年</div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {tickets.map((ticket, idx) => (
              <TicketCard
                key={idx}
                ticket={ticket}
                index={idx}
                onClick={() => handleTicketClick(ticket)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 text-purple-400/50">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
              <span className="text-sm">感谢每一次相遇</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
            </div>
          </motion.div>
        </div>
      </div>

      {!!selectedTicket && (
        <Modal
          open={modalOpen}
          onCancel={handleCloseModal}
          footer={null}
          width={700}
          centered
          closeIcon={
            <span className="text-purple-300 transition-colors hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          }
          className="ticket-detail-modal"
          style={{
            top: 20,
          }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative"
            >
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500" />

              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]" />
                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-purple-600/15 blur-[60px]" />
              </div>

              <div className="relative p-8">
                <div className="mb-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-2"
                  >
                    <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                    <span className="text-sm font-medium text-purple-300">
                      {selectedTicket.showNumber}
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-2 bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text text-3xl font-bold text-transparent"
                  >
                    {selectedTicket.artist} {selectedTicket.name}站
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-purple-300/70"
                  >
                    {selectedTicket.tourName}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative mb-8 overflow-hidden rounded-2xl border border-purple-500/30 bg-purple-950/50"
                >
                  <div className="flex aspect-[16/9] items-center justify-center p-8">
                    <div className="w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 shadow-2xl">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4">
                        <div className="text-lg font-bold text-white">
                          {selectedTicket.tourName}
                        </div>
                        <div className="text-sm text-purple-200">
                          {selectedTicket.artist}
                        </div>
                      </div>

                      <div className="space-y-4 p-6">
                        <div className="flex justify-between">
                          <div>
                            <div className="text-xs text-purple-400">场馆</div>
                            <div className="font-semibold text-purple-900">
                              {selectedTicket.address}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-purple-400">日期</div>
                            <div className="font-semibold text-purple-900">
                              {selectedTicket.date}
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-dashed border-purple-300 pt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-purple-400">座位</div>
                              <div className="text-lg font-bold text-purple-900">
                                {selectedTicket.seat}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-purple-400">票价</div>
                              <div className="text-xl font-bold text-purple-600">
                                {selectedTicket.price}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center gap-[1px] pt-4">
                          {[...Array(40)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-purple-900"
                              style={{
                                width: Math.random() > 0.5 ? '2px' : '1px',
                                height: '40px',
                              }}
                            />
                          ))}
                        </div>
                        <div className="text-center font-mono text-xs text-purple-500">
                          {selectedTicket.orderNumber}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3"
                >
                  {[
                    { label: '演出日期', value: selectedTicket.date, icon: '📅' },
                    { label: '开场时间', value: selectedTicket.time, icon: '⏰' },
                    { label: '演出场馆', value: selectedTicket.address, icon: '🏟️' },
                    { label: '入场通道', value: selectedTicket.gate, icon: '🚪' },
                    { label: '座位区域', value: selectedTicket.section, icon: '🎫' },
                    { label: '票价', value: selectedTicket.price, icon: '💰' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="rounded-xl border border-purple-500/20 bg-purple-950/50 p-4 transition-colors hover:border-purple-500/40"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-xs text-purple-400">{item.label}</span>
                      </div>
                      <div className="text-sm font-semibold text-white">{item.value}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {selectedTicket.specialNotes && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-purple-600/10 p-6"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✨</span>
                      <div>
                        <div className="mb-1 text-sm font-medium text-purple-300">
                          演出回忆
                        </div>
                        <div className="text-white/90">{selectedTicket.specialNotes}</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-6 border-t border-purple-500/20 pt-6 text-center"
                >
                  <div className="text-xs text-purple-400/60">订单编号</div>
                  <div className="font-mono text-sm text-purple-300">
                    {selectedTicket.orderNumber}
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500" />
            </motion.div>
          </AnimatePresence>
        </Modal>
      )}
    </div>
  );
};

export default Tickets;

import { http, HttpResponse } from "msw";

// Mock data
const mockTransactions = [
  {
    id: "tx001",
    recipient: "김철수",
    amount: 100000,
    date: "2024-06-10",
    memo: "점심값",
    type: "transfer",
    status: "completed"
  },
  {
    id: "tx002", 
    recipient: "이영희",
    amount: 50000,
    date: "2024-06-09",
    memo: "카페값",
    type: "transfer",
    status: "completed"
  },
  {
    id: "tx003",
    recipient: "박민수",
    amount: 200000,
    date: "2024-06-08", 
    memo: "생일선물",
    type: "transfer",
    status: "pending"
  }
];

const mockUsers = [
  {
    id: "user001",
    name: "홍길동",
    email: "hong@example.com",
    accountNumber: "110-123-456789",
    balance: 1500000
  },
  {
    id: "user002", 
    name: "김철수",
    email: "kim@example.com",
    accountNumber: "110-987-654321",
    balance: 800000
  }
];

export const handlers = [
  // GET /api/transactions - 거래 내역 목록
  http.get("/api/transactions", () => {
    return HttpResponse.json(mockTransactions);
  }),

  // GET /api/transactions/:id - 특정 거래 내역
  http.get("/api/transactions/:id", ({ params }) => {
    const { id } = params;
    const transaction = mockTransactions.find(tx => tx.id === id);
    
    if (!transaction) {
      return new HttpResponse(null, { status: 404 });
    }
    
    return HttpResponse.json({
      ...transaction,
      accountNumber: "110-123-456789",
      bankName: "신한은행"
    });
  }),

  // POST /api/transactions - 새로운 거래 생성
  http.post("/api/transactions", async ({ request }) => {
    const body = await request.json() as {
      recipient: string;
      amount: number;
      memo?: string;
      type?: string;
    };
    
    const newTransaction = {
      id: `tx${Date.now()}`,
      recipient: body.recipient,
      amount: body.amount,
      memo: body.memo || "",
      type: body.type || "transfer",
      date: new Date().toISOString().split('T')[0],
      status: "pending"
    };
    
    mockTransactions.unshift(newTransaction);
    
    return HttpResponse.json(newTransaction, { status: 201 });
  }),

  // GET /api/users - 사용자 목록
  http.get("/api/users", () => {
    return HttpResponse.json(mockUsers);
  }),

  // GET /api/users/:id - 특정 사용자 정보
  http.get("/api/users/:id", ({ params }) => {
    const { id } = params;
    const user = mockUsers.find(u => u.id === id);
    
    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }
    
    return HttpResponse.json(user);
  }),

  // GET /api/balance - 잔액 조회
  http.get("/api/balance", () => {
    return HttpResponse.json({
      balance: 1500000,
      currency: "KRW",
      lastUpdated: new Date().toISOString()
    });
  }),

  // POST /api/auth/login - 로그인
  http.post("/api/auth/login", async ({ request }) => {
    const body = await request.json() as { email: string; password: string };
    
    if (body.email === "test@example.com" && body.password === "password") {
      return HttpResponse.json({
        token: "mock-jwt-token",
        user: {
          id: "user001",
          name: "홍길동",
          email: "test@example.com"
        }
      });
    }
    
    return new HttpResponse(null, { status: 401 });
  }),

  // GET /api/notifications - 알림 목록
  http.get("/api/notifications", () => {
    return HttpResponse.json([
      {
        id: "notif001",
        title: "거래 완료",
        message: "김철수님께 100,000원이 송금되었습니다.",
        type: "success",
        read: false,
        createdAt: new Date().toISOString()
      },
      {
        id: "notif002", 
        title: "잔액 부족",
        message: "계좌 잔액이 부족합니다.",
        type: "warning",
        read: true,
        createdAt: new Date(Date.now() - 86400000).toISOString()
      }
    ]);
  })
];
